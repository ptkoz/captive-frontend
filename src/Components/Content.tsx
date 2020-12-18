/**
 * Component description goes here
 */
import * as React from "react";
import { Motivation } from "./Motivation";
import { Geekness } from "./Geekness";
import { SignIn } from "./SignIn";
import { Error404 } from "./Error404";
import { Success } from "./Success";
import { Route, Switch } from "react-router";

/**
 * Props available on this component
 */
export interface IContentProps {

}

/**
 * The component class
 */
export class Content extends React.PureComponent<IContentProps> {
	public render(): JSX.Element {
		return (
			<div>
				<Switch>
					<Route path="/" exact={true} component={SignIn}/>
					<Route path="/geekness.html" component={Geekness}/>
					<Route path="/motivation.html" component={Motivation}/>
					<Route path="/success.html" component={Success}/>
					<Route component={Error404}/>
				</Switch>
			</div>
		);
	}
}
