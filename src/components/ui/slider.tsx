"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  onChange: (minVal: number, maxVal: number) => void;
  step?: number;
  disabled?: boolean;
  className?: string;
  formatLabel?: (value: number) => string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  minVal,
  maxVal,
  onChange,
  step = 1,
  disabled = false,
  className = '',
  formatLabel = (value: number) => `$${value}`
}) => {
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [internalRange, setInternalRange] = useState<[number, number]>([minVal, maxVal]);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Update internal state when props change
  useEffect(() => {
    setInternalRange([minVal, maxVal]);
  }, [minVal, maxVal]);
  
  // Clamp value to step and bounds
  const clampValue = useCallback((value: number): number => {
    const clampedValue = Math.max(min, Math.min(max, value));
    return Math.round(clampedValue / step) * step;
  }, [min, max, step]);
  
  // Convert value to percentage position
  const valueToPercent = useCallback((value: number): number => {
    return ((value - min) / (max - min)) * 100;
  }, [min, max]);
  
  // Convert mouse position to value
  const positionToValue = useCallback((clientX: number): number => {
    if (!sliderRef.current) return min;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const rawValue = min + percent * (max - min);
    return clampValue(rawValue);
  }, [min, max, clampValue]);
  
  // Find the closest thumb to a position
  const getClosestThumb = useCallback((value: number): 0 | 1 => {
    const [currentMin, currentMax] = internalRange;
    const distanceToMin = Math.abs(value - currentMin);
    const distanceToMax = Math.abs(value - currentMax);
    return distanceToMin <= distanceToMax ? 0 : 1;
  }, [internalRange]);
  
  // Update range and call onChange
  const updateRange = useCallback((newMin: number, newMax: number) => {
    const clampedMin = clampValue(newMin);
    const clampedMax = clampValue(newMax);
    const validMin = Math.min(clampedMin, clampedMax);
    const validMax = Math.max(clampedMin, clampedMax);
    
    setInternalRange([validMin, validMax]);
    onChange(validMin, validMax);
  }, [clampValue, onChange]);
  
  // Handle track click - move nearest thumb
  const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isDragging !== null) return;
    
    const clickValue = positionToValue(e.clientX);
    const closestThumb = getClosestThumb(clickValue);
    const [currentMin, currentMax] = internalRange;
    
    if (closestThumb === 0) {
      updateRange(clickValue, currentMax);
    } else {
      updateRange(currentMin, clickValue);
    }
  }, [disabled, isDragging, positionToValue, getClosestThumb, internalRange, updateRange]);
  
  // Handle mouse down on thumb
  const handleMouseDown = useCallback((thumbIndex: number, e: React.MouseEvent) => {
    if (disabled) return;
    
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(thumbIndex);
    
    const handleMouseMove = (e: MouseEvent) => {
      const newValue = positionToValue(e.clientX);
      const [currentMin, currentMax] = internalRange;
      
      if (thumbIndex === 0) {
        updateRange(newValue, currentMax);
      } else {
        updateRange(currentMin, newValue);
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [disabled, positionToValue, internalRange, updateRange]);
  
  // Handle keyboard events for accessibility
  const handleKeyDown = useCallback((thumbIndex: number, e: React.KeyboardEvent) => {
    if (disabled) return;
    
    const [currentMin, currentMax] = internalRange;
    let newValue: number;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = (thumbIndex === 0 ? currentMin : currentMax) - step;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = (thumbIndex === 0 ? currentMin : currentMax) + step;
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        return;
    }
    
    e.preventDefault();
    
    if (thumbIndex === 0) {
      updateRange(newValue, currentMax);
    } else {
      updateRange(currentMin, newValue);
    }
  }, [disabled, internalRange, step, min, max, updateRange]);
  
  const [currentMin, currentMax] = internalRange;
  const minPercent = valueToPercent(currentMin);
  const maxPercent = valueToPercent(currentMax);
  
  return (
    <div className={`w-full px-1 ${className}`}>
      <div 
        ref={sliderRef}
        className={`relative h-8 transition-all duration-200 ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={handleTrackClick}
        onMouseEnter={() => !disabled && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Track */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-green-500/20 rounded-full transform -translate-y-1/2">
          {/* Range fill */}
          <div 
            className={`absolute h-full rounded-full transition-all duration-200 ${
              disabled ? 'bg-gray-400' : 'bg-gradient-to-r from-green-500 to-green-600'
            }`}
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`
            }}
          />
          
          {/* Hover indicators */}
          {isHovering && !disabled && (
            <>
              <div 
                className="absolute top-1/2 w-4 h-4 bg-green-400 rounded-full opacity-50 transform -translate-y-1/2 -translate-x-2 transition-opacity duration-200"
                style={{ left: `${minPercent}%` }}
              />
              <div 
                className="absolute top-1/2 w-4 h-4 bg-green-400 rounded-full opacity-50 transform -translate-y-1/2 -translate-x-2 transition-opacity duration-200"
                style={{ left: `${maxPercent}%` }}
              />
            </>
          )}
        </div>
        
        {/* Min Thumb */}
        <div
          className={`absolute top-1/2 w-6 h-6 bg-white border-2 rounded-full shadow-lg transform -translate-y-1/2 -translate-x-3 transition-all duration-200 ${
            disabled 
              ? 'border-gray-400 cursor-not-allowed' 
              : `border-green-500 cursor-grab focus:outline-none focus:ring-4 focus:ring-green-200 ${
                  isDragging === 0 ? 'scale-110 cursor-grabbing shadow-xl ring-4 ring-green-200' : 'hover:scale-105 hover:shadow-xl'
                }`
          }`}
          style={{ left: `${minPercent}%` }}
          onMouseDown={(e) => handleMouseDown(0, e)}
          onKeyDown={(e) => handleKeyDown(0, e)}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentMin}
          aria-label="Minimum value"
        >
          <div className={`absolute inset-1 rounded-full ${disabled ? 'bg-gray-400' : 'bg-green-500'}`} />
        </div>
        
        {/* Max Thumb */}
        <div
          className={`absolute top-1/2 w-6 h-6 bg-white border-2 rounded-full shadow-lg transform -translate-y-1/2 -translate-x-3 transition-all duration-200 ${
            disabled 
              ? 'border-gray-400 cursor-not-allowed' 
              : `border-green-500 cursor-grab focus:outline-none focus:ring-4 focus:ring-green-200 ${
                  isDragging === 1 ? 'scale-110 cursor-grabbing shadow-xl ring-4 ring-green-200' : 'hover:scale-105 hover:shadow-xl'
                }`
          }`}
          style={{ left: `${maxPercent}%` }}
          onMouseDown={(e) => handleMouseDown(1, e)}
          onKeyDown={(e) => handleKeyDown(1, e)}
          tabIndex={disabled ? -1 : 0}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentMax}
          aria-label="Maximum value"
        >
          <div className={`absolute inset-1 rounded-full ${disabled ? 'bg-gray-400' : 'bg-green-500'}`} />
        </div>
        
        {/* Value labels */}
        <div 
          className="absolute top-8 text-xs text-gray-600 font-medium transform -translate-x-1/2"
          style={{ left: `${minPercent}%` }}
        >
          {formatLabel(currentMin)}
        </div>
        <div 
          className="absolute top-8 text-xs text-gray-600 font-medium transform -translate-x-1/2"
          style={{ left: `${maxPercent}%` }}
        >
          {formatLabel(currentMax)}
        </div>
      </div>
    </div>
  );
};

export { RangeSlider };
