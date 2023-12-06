

export const ContactList = ({ contactsList, onDeleteContact }) => {
    
    return (
        <ul>
            {contactsList.map(({ id, name, number }) => (<li key={id}><p>{name}:</p> <span>{number}</span> <button onClick={() => onDeleteContact(id)} >Delete</button></li>))}
        </ul>
    )
}