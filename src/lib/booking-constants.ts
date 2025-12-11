/**
 * Booking and Appointment Messaging Constants
 * 
 * Centralized configuration for all booking-related messaging to ensure
 * consistent communication about appointment requests vs confirmed bookings.
 */

export const BOOKING_CONFIG = {
  PHONE: '(707) 664-9702',
  BOOKING_URL: 'https://booking.rossware.com/schedule/4588',
  SCHEDULE_PREP_URL: '/schedule-prep',
  
  // Confirmation timeframe messaging
  CONFIRMATION_TIME: 'within 4 hours during business hours or the next business day',
  CONFIRMATION_TIME_SHORT: '4 hours (business hours)',
  
  // Button text variants
  BUTTONS: {
    PHONE_PRIMARY: 'Call (707) 664-9702',
    PHONE_WITH_BADGE: 'Call for Immediate Confirmation',
    ONLINE_REQUEST: 'Request Appointment Online',
    ONLINE_REQUEST_SHORT: 'Request Appointment',
  },
  
  // Disclaimer text for high-traffic pages (Option A)
  DISCLAIMERS: {
    FULL: 'Online appointment requests are confirmed within 4 hours during business hours or the next business day. Call for immediate confirmation and most current availability.',
    MEDIUM: 'Online requests confirmed within 4 hours (business hours). Call for immediate confirmation.',
    SHORT: 'Request confirmed within 4 hours. Call for immediate scheduling.',
  },
  
  // Tooltip text for secondary pages (Option D)
  TOOLTIPS: {
    DEFAULT: 'Online requests are confirmed within 4 hours during business hours. For immediate scheduling, please call.',
    SHORT: 'Confirmation required. Call for immediate scheduling.',
  },
  
  // Page-specific messaging
  MESSAGES: {
    HERO_CTA: 'For most up-to-date availability, call us directly.',
    CONFIRMATION_PAGE: 'Your appointment request has been received and will be confirmed within 4 hours during business hours or the next business day.',
    SCHEDULE_PREP: 'Online appointments are requests that require confirmation. For guaranteed scheduling, call us directly.',
    EMERGENCY: 'Emergency service available upon request (emergency call fee applies).',
    WEEKEND: 'Weekend and after-hours service available upon request, subject to availability.',
  }
} as const

export type BookingConfig = typeof BOOKING_CONFIG
