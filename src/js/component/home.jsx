import React, {useState} from "react";

const Home = () => {

	const [newTask, setNewTask] = useState('');
    const [toDoTasks, setToDoTasks] = useState([]);

	return(
		<div className="main">
			<div className="container">
				<h1>
					To Do List 📝
				</h1>				
				<ul>
					<li>
						<input 
							type="text" 
							onChange={(e) => setNewTask(e.target.value)}                 
							value={newTask}
							onKeyDown={(e) => {
								if (e.key === 'Enter'){
									setToDoTasks(toDoTasks.concat(newTask));
									setNewTask("");
								}
							}}
							placeholder="What needs to be done?😎"></input>
					</li>
					{toDoTasks.map((task, index) => (
					<li>{task}
						<i 
						className="far fa-trash-alt pe-2"
						onClick={(() =>
							setToDoTasks(
								toDoTasks.filter(
									(task, currentIndex) =>
										index !== currentIndex
								)
						))}></i>
					</li>
					))}                
				</ul>
				<div className="footer">
					<strong>{toDoTasks.length}</strong> task(s) left
				</div>				
			</div>
			<div className="container">
				<div className="container" id="p1"></div>
				<div className="container" id="p2"></div>
			</div>
			<div className="container-fluid" id="byebye">
				<p>Made with love and lots of patience 😅</p>
			</div>				
		</div>
    )
}

export default Home;
