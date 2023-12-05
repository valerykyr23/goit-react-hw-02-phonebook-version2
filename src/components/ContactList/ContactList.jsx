

export const ContactList = ({ contactsList }) => {
    
    return (
        <ul>
            {contactsList.map(({ id, name, number }) => (<li><p>{name}:</p> <span>{number}</span></li>))}
        </ul>
    )
}