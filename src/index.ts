import CryptoES from 'crypto-es';

/**
 * ShopifyUtil class.
 */
class ShopifyUtil {
    // apiKey of App from Partner dashboard
    private apiKey: string;
    private sharedSecret: string;
    // App URL that handles the Code and generates the access token
    private redirectUri: string;
    private accessMode: string;
    private scopes: string | Array<string>;

    /**
     * Create a ShopifyToken instance.
     *
     * @param {Object} options Configuration options
     * @param {String} options.redirectUri The redirect URL for the Oauth2 flow
     * @param {String} options.sharedSecret The Shared Secret
     * @param {Array|String} [options.scopes] The list of scopes
     * @param {String} options.apiKey The API Key for the app
     * @param {String} [options.accessMode] The API access mode
     */
    constructor(options: any) {
        if ( !options || !options.sharedSecret || !options.redirectUri || !options.apiKey) {
            throw new Error('Missing or invalid configuration options');
        }
        this.apiKey = options.apiKey;
        this.sharedSecret = options.sharedSecret;
        this.redirectUri = options.redirectUri;
        this.accessMode = 'accessMode' in options ? options.accessMode : '';
        this.scopes = 'scopes' in options ? options.scopes : 'read_content';
    }

    /**
     * Generates a random nonce.
     *
     * @return {String} The random nonce value
     * @public
     */
    generateNonce() {
        return CryptoES.lib.WordArray.random(128/8).toString(CryptoES.enc.Hex);
    }

    /**
     * Generates the authorization URL.
     *
     * @param {String} shop The shop name
     * @param {Array|String} [scopes] The list of scopes or a single scope value
     * @param {String} [nonce] The nonce value
     * @param {String} [accessMode] The API access mode
     * @return {String} The authorization URL
     * @public
     */
    generateAuthUrl(shop: string, scopes: string | Array<string>, nonce: string, accessMode: string) {
        //TODO
    }

    /**
     * Verify the hmac returned by Shopify.
     *
     * @param {Object} query The parsed query string
     * @return {Boolean} `true` if the hmac is valid, else `false`
     * @public
     */
    verifyHmac(query: any) {
        // TODO Use Nounce
        const message = Object.keys(query)
            .filter((key) => key !== 'hmac')
            .map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
            }).join('&');
        const hmac = query.hmac;
        const hash = CryptoES.HmacSHA256(message, this.sharedSecret);
        return hmac === hash.toString(CryptoES.enc.Hex);
    }

    /**
     * Request an access token.
     *
     * @param {String} shop The hostname of the shop, e.g. foo.myshopify.com
     * @param {String} code The authorization code
     * @return {Promise} Promise which is fulfilled with an access token and
     *     additional data
     * @public
     */
    getAccessToken() {
        // TODO
    }
}


export default ShopifyUtil;