import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

export const useScreenOrientationLock = (orientation) => {
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock[orientation]);
    };
    lockOrientation();

    return () => {
      ScreenOrientation.unlockAsync(); // unlock the screen orientation when the component is unmounted
    };
  }, [orientation]);
};
