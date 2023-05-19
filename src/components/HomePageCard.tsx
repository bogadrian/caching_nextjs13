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
      <Comp1SS />
      <Comp3CC />
      <Comp2SS />
    </div>
  );
};
