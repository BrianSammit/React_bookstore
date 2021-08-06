import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { book, remove } = props;
  return (
    <>
      <div className="Lesson-Panel" key={book.id}>
        <div>
          <tr className="School-of">{book.category}</tr>
          <tr className="title">{book.title}</tr>
          <tr className="author">Frank Collins</tr>
          <div className="buttons">
            <button className="Remove2" type="button">
              Comment
            </button>
            <div className="Line-2" />
            <button className="Remove" type="button" onClick={remove} value={book.id}>
              Remove
            </button>
            <div className="Line-2" />
            <button className="Remove" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div className="Rectangle-3">
              <img src="/img/progress.png" alt="progress" />
            </div>
            <div>
              <div className="-Percent-Complete">64%</div>
              <div className="Completed">Completed</div>
            </div>
          </div>
          <div className="line" />
          <div>
            <div className="Current-Chapter">CURRENT CHAPTER</div>
            <div className="Current-Lesson">Introduction</div>
            <div className="Rectangle-2">UPDATE PROGRESS</div>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  remove: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: '',
};

export default Book;
