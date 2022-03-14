

export const Select = ({setSelectedFilter,tags}) => {
    return <select name="filters" onChange={(e) => setSelectedFilter(e.target.value)}>
        {
            tags && tags.map((el, idx) => {
                return el !== "All" && <option key={idx} value={el}>{el}</option>
            })
        }

    </select>
}