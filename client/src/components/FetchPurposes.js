import React, { useEffect, useState } from "react";
import { getElements } from "../services/TrackerServices";

const FetchPurposes = () => {


    useEffect(() => {
        getElements("purposes")
    }, [])


}

export default FetchPurposes