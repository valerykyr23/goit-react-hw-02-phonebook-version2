import css from "./Filter.module.css"
export const Filter = () => {

    return (
       <div className={css.filterContainer}>
            <label>Find contacts by name
                <br/>
        <input
            
            type="text"
            name="filter"
            
          />
            </label>
            </div>
    )
}