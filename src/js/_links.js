

//
//  OPEN EXTERNAL LINKS IN NEW TAB
//––––––––––––––––––––––––––––––––––––––––––––––––––

var HandleLinks = (function() {


  //
  //  HANDLE EXTERNAL LINKS
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function handleExternalLinks() {

    // document.addEventListener('DOMContentLoaded', function() {

      // Variables.
      var links = document.links;
      var link;
      var linkHref;

      // Loop through all links.
      for (var i = 0, linksLength = links.length; i < linksLength; i++) {

        link = links[i];

        linkHref = link.href;

        // If the link is to an external site or a javascript:void(0);.
        if (
          link.hostname != window.location.hostname &&
          linkHref !== 'javascript:void(0)' &&
          linkHref !== 'javascript:void(0);'
        ) {

          // Set the target of the link to _blank.
          link.target = '_blank';

        // If the link contains a #.
        } else if ( linkHref.indexOf('#') >= 0 ) {

          // Listen for clicks.
          // link.addEventListener('click', handleLinkClicks);
        }
      }
    // }, false);
  } // handleExternalLinks()


  //
  //  HANDLE LINK CLICKS
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function handleLinkClicks(e) {

    // Get the links href attribute.
    var linkHref = this.href;

    // Get the links anchor from the linkHref.
    var linkAnchor = getAnchor( linkHref );

    // Get the link elem.
    var linkElem = document.querySelector( linkAnchor );

    // Scroll to the anchor.
    linkElem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


  //
  //  GET ANCHOR
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function getAnchor( linkHref ) {

    // Instantiate variables.
    var length;
    var anchorIndex;
    var anchor;

    // Get link href length.
    length = linkHref.length;

    // Get anchor index.
    anchorIndex = linkHref.indexOf('#');

    // Get everthing from the href element from the hash onwards.
    anchor = linkHref.substring( anchorIndex, length);

    // Return the anchor.
    return anchor;

  } // getAnchor()


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    handleExternalLinks();
  }

  return {
    init: init
  };
})();