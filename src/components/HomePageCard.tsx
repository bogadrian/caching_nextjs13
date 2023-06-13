import { Comp1SS } from './Comp1SS';
import { Comp2SS } from './Comp2SS';
import { Comp3CC } from './Comp3CC';

export const HomePageCard = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      Dashboard Page
      {/* @ts-expect-error Async Server Component */}
      <Comp1SS />
      {/* @ts-expect-error Async Server Component */}
      <Comp2SS />
      <Comp3CC />
    </div>
  );
};
