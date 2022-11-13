import Spinner from 'react-bootstrap/Spinner';

export default function Spinners() {
  return (
    <div className='text-center d-block'>
      <Spinner className="spiner" 
                    as="span"
                    animation="border"
                    role="status"
                    aria-hidden="true">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}