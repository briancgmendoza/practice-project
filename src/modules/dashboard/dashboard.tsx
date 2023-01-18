import React, { useState, useEffect } from 'react';
import MiniDrawer from '../../commons/drawer/drawer';
import {useSelector} from "react-redux";
import {ApplicationState} from "../../store/reducer";
import {Loading} from "../../commons/loading/loading";


export function Dashboard() {
  const isLoading = useSelector((state: ApplicationState) => state.dashboard.isLoading)
  return (
    <>
    <MiniDrawer />
    </>
  )
}
