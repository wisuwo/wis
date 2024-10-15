
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro' title="Background image of three female scientists." aria-label="Background image of three animated female scientists.">
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 offset-md-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
Learn More</a>{''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}