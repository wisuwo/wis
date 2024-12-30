// renders image item in portfolio
export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <div className='hover-bg'>
        {' '}
        {/* Anchor tag linking to the large version of the image */}
        <a
          href={largeImage}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          
          {/* Hover effect text overlay */}
          <div className='hover-text'>
            <h4>{title}</h4>
          </div>

          {/* Small version of the image to be displayed */}
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}