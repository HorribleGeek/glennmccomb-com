
//
//  ARTISTS PLACEHOLDER
//––––––––––––––––––––––––––––––––––––––––––––––––––

import React from 'react';
import PropTypes from 'prop-types';

class ArtistsPlaceholder extends React.Component {
  
  render() {
    const cols = [];
    const limit = this.props.limit;

    for (var i = 0; i < limit; i++) {
      cols.push(
        <div key={i} className={this.props.colClasses}>
          <div className="last-fm-artist -is-placeholder">
            <div className="last-fm-artist__rank">
            </div>
            <div className="last-fm-artist__meta">
              <div className="last-fm-artist__name"></div>
              <div className="last-fm-artist__play-count"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="row row__last-fm">

        {cols}

      </div>
    )
  }
}

ArtistsPlaceholder.propTypes = {
  limit: PropTypes.number.isRequired,
  colClasses: PropTypes.string.isRequired
}

export default ArtistsPlaceholder;