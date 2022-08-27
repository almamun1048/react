import React from 'react';
import WithOutHooks from './HOOKS/WithOutHooks';
import WithHooks from './HOOKS/WithHooks';

export default function App() {
  return (
    <div>
      <WithOutHooks />
      <WithHooks />
    </div>
  )
}