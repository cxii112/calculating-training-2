import React from 'react';

const createIonIcon = (iconName: string) =>
{
  return React.createElement('ion-icon', { name: iconName });
}

export default createIonIcon;