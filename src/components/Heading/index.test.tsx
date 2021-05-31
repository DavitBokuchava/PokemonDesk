/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;
  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });
  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });
  it('render with props size="l"', () => {
    act(() => {
      render(<Heading size="l" />, container);
    });
    expect(container?.querySelector('h2')).not.toBeNull();
  });
  it('render with props children', () => {
    act(() => {
      render(<Heading>Title</Heading>, container);
    });
    expect(container?.textContent).toBe('Title');
  });
});
