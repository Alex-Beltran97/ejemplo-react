import { Typography } from '@mui/material';
import React from 'react'
import CardProviders from '../components/providers/TableProviders/CardProviders';
import ModalNewProvider from '../components/providers/ModalNewProvider';

export const Providers = () => {
  return (<>
    <Typography variant="h5">Providers</Typography>
    <ModalNewProvider />
    <CardProviders />
  </>);
};
