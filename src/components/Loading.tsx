
export const Loading = () => {
    return (
        <div className='loading-map d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h3>Please wait</h3>
                <span>locating...</span>
            </div>
        </div>
    )
}
