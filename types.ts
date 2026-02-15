
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: number;
  author: string;
  rating: number;
  content: string;
  tag: string;
}

export interface OfferItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  condition: string;
}
