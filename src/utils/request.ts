import Url from 'url';

function req() {
  const uri = Url.format({
    protocol: 'https',
    host: 'zarmarathon.com',
    query: {
      name: 'Zar',
    },
  });
  return uri;
}

export default req;
