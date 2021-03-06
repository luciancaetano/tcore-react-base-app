import { DashboardLogo } from "@app/components";
import * as reducers from "@app/redux/reducers";
import { IAppConfig } from "@app/types";
import React from "react";
import { applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import reduxThunk from "redux-thunk";

const AppConfig: IAppConfig = {
    isProduction: false,
    enviroments: {
        dev: {
            rest: "",
        },
        prod: {
            rest: "",
        },
        stag: {
            rest: "",
        },
    },
    // Get reducers
    getReducers: () => ({
        counter: reducers.CounterReducer,
        form: formReducer,
        layout: reducers.LayoutReducer,
    }),
    // Compose Redux Middlewares
    composeMiddlewares: () => compose(
            applyMiddleware(reduxThunk),
    ),
    logo: <DashboardLogo/>,
    themeOptions: {},
};

export default AppConfig;
