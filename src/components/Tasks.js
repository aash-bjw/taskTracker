
const tasks = [
    {
        id: 1,
        text: 'Grocery Shopping',
        day: 'Feb 27th at 6:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Oil Change',
        day: 'March 7th at 3:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Pup Grooming',
        day: 'March 5th at 1:30pm',
        reminder: true
    },

]

function Tasks() {
    return (
        <>
            {tasks.map((tasks) => (
                <h3>{tasks.text}</h3>
            ))}
        </>
    )
}

export default Tasks
