import { IsState as IProps } from '../interfaces'

// importing interface from another File
// interface IProps {
//     people: {
//         name: string,
//         age: number,
//         url: string,
//         note?: string
//     }[]
// }

const Todo: React.FC<IProps> = ({ people }) => {

    // function needs to return jsx element so it needs to be defined. also return needs a proper return of jsx in it. 
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {

            return (<li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>)
        })
    }

    return (
        <div>
            <ul>
                {
                    renderList()
                }
            </ul>

        </div>
    );
}

export default Todo; 