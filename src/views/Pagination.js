function Pagination(props) {
  const getPaginas = () => {
    const result = [];
    for (let i = 0; i < props.total; i++) {
      let page = i+1;
      result.push(
        <a className={props.page === page ? 'active' : ''} onClick={() => props.onChange(page)}>
          {page}
        </a>
      );
    }
    return result;
  };
  return (
    <div className='topbar-filter'>
      <label>Movies per page:</label>
      <div className='pagination2'>
        <span>
          Page {props.page} of {props.total}:
        </span>
        {/* {Array.apply(0, Array(props.total)).map((value) => {
          <a className='active' href='#'>
            1
          </a>;
        })} */}

        {getPaginas()}
      </div>
    </div>
  );
}
export default Pagination;
