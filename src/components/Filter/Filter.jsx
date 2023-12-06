import css from "./Filter.module.css"


export const Filter = ({filterValue, onChange}) => {

    return (
       <div className={css.filterBox}>
            <label>Find contacts by name
                <br/>
        <input
            className={css.filterInput}
            type="text"
            name="filter"
            value={filterValue}
            onChange={onChange}
          />
            </label>
            </div>
    )
}