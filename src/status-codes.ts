export default {
  300: {
    title: 'Multiple Choice',
    description:
      'The request has more than one possible response. The user agent or user should choose one of them.',
  },
  301: {
    title: 'Moved Permanently',
    description:
      'The URL of the requested resource has been changed permanently.',
  },
  302: {
    title: 'Found',
    description:
      'This response code means that the URI of requested resource has been changed temporarily.',
  },
  303: {
    title: 'See Other',
    description:
      'The server sent this response to direct the client to get the requested resource at another URI with a GET request.',
  },
  307: {
    title: 'Use Proxy Deprecated',
    description:
      'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.',
  },
  308: {
    title: 'Permanent Redirect',
    description:
      'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.',
  },
  400: {
    title: 'Bad Request',
    description:
      'The server cannot or will not process the request due to something that is perceived to be a client error.',
  },
  401: {
    title: 'Unauthorized',
    description:
      'The client must authenticate itself to get the requested response.',
  },
  403: {
    title: 'Forbidden',
    description:
      'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.',
  },
  404: {
    title: 'Not found',
    description: 'The server can not find the requested resource.',
  },
  405: {
    title: 'Method Not Allowed',
    description:
      'The request method is known by the server but is not supported by the target resource.',
  },
  406: {
    title: 'Not Acceptable',
    description:
      "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
  },
  407: {
    title: 'Proxy Authentication Required',
    description:
      'This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.',
  },
  408: {
    title: 'Request Timeout',
    description:
      'This response is sent on an idle connection by some servers, even without any previous request by the client.',
  },
  409: {
    title: 'Conflict',
    description: 'A request conflicts with the current state of the server.',
  },
  410: {
    title: 'Gone',
    description:
      'This response is sent when the requested content has been permanently deleted from server, with no forwarding address.',
  },
  411: {
    title: 'Length Required',
    description:
      'Server rejected the request because the Content-Length header field is not defined and the server requires it.',
  },
  412: {
    title: 'Precondition Failed',
    description:
      'The client has indicated preconditions in its headers which the server does not meet.',
  },
  413: {
    title: 'Payload Too Large',
    description:
      'Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.',
  },
  414: {
    title: 'URI Too Long',
    description:
      'The URI requested by the client is longer than the server is willing to interpret.',
  },
  415: {
    title: 'Unsupported Media Type',
    description:
      'The media format of the requested data is not supported by the server, so the server is rejecting the request.',
  },
  416: {
    title: 'Range Not Satisfiable',
    description:
      "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.",
  },
  417: {
    title: 'Expectation Failed',
    description:
      'This response code means the expectation indicated by the Expect request header field cannot be met by the server.',
  },
  418: {
    title: "I'm a teapot",
    description: 'The server refuses the attempt to brew coffee with a teapot.',
  },
  421: {
    title: 'Misdirected Request',
    description:
      'The request was directed at a server that is not able to produce a response.',
  },
  422: {
    title: 'Unprocessable Entity (WebDAV)',
    description:
      'The request was well-formed but was unable to be followed due to semantic errors.',
  },
  423: {
    title: '423 Locked (WebDAV)',
    description: 'The resource that is being accessed is locked.',
  },
  424: {
    title: 'Failed Dependency (WebDAV)',
    description: 'The request failed due to failure of a previous request.',
  },
  425: {
    title: 'Too Early Experimental',
    description:
      'Indicates that the server is unwilling to risk processing a request that might be replayed.',
  },
  426: {
    title: 'Upgrade Required',
    description:
      'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
  },
  428: {
    title: 'Precondition Required',
    description: 'The origin server requires the request to be conditional.',
  },
  429: {
    title: 'Too Many Requests',
    description:
      'The user has sent too many requests in a given amount of time ("rate limiting").',
  },
  431: {
    title: 'Request Header Fields Too Large',
    description:
      'The server is unwilling to process the request because its header fields are too large.',
  },
  451: {
    title: 'Unavailable For Legal Reasons',
    description:
      'The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.',
  },
  500: {
    title: 'Internal Server Error',
    description:
      'The server has encountered a situation it does not know how to handle.',
  },
  501: {
    title: 'Not Implemented',
    description:
      'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.',
  },
  502: {
    title: 'Bad Gateway',
    description:
      'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.',
  },
  503: {
    title: 'Service Unavailable',
    description:
      'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.',
  },
  504: {
    title: 'Gateway Timeout',
    description:
      'This error response is given when the server is acting as a gateway and cannot get a response in time.',
  },
  505: {
    title: 'HTTP Version Not Supported',
    description:
      'The HTTP version used in the request is not supported by the server.',
  },
  506: {
    title: 'Variant Also Negotiates',
    description:
      'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
  },
  507: {
    title: 'Insufficient Storage (WebDAV)',
    description:
      'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
  },
  508: {
    title: 'Loop Detected (WebDAV)',
    description:
      'The server detected an infinite loop while processing the request.',
  },
  510: {
    title: 'Not Extended',
    description:
      'Further extensions to the request are required for the server to fulfill it.',
  },
  511: {
    title: 'Network Authentication Required',
    description:
      'Indicates that the client needs to authenticate to gain network access.',
  },
}
