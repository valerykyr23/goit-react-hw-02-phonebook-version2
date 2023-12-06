import css from "./Filter.module.css"


export const Filter = ({filterValue, onChange}) => {

    return (
       <div className={css.filterContainer}>
            <label>Find contacts by name
                <br/>
        <input
            
            type="text"
            name="filter"
            value={filterValue}
            onChange={onChange}
          />
            </label>
            </div>
    )
}