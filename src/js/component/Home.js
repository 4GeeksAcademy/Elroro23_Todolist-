import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./Todolist";

//create your first component
const Home = () => {
return(
	<>
	<TodoList/>
	</>
);
};
export default Home;
