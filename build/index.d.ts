/**
 * ShopifyUtil class.
 */
declare class ShopifyUtil {
    private apiKey;
    private sharedSecret;
    private redirectUri;
    private accessMode;
    private scopes;
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
    constructor(options: any);
    /**
     * Generates a random nonce.
     *
     * @return {String} The random nonce value
     * @public
     */
    generateNonce(): string;
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
    generateAuthUrl(shop: string, scopes: string | Array<string>, nonce: string, accessMode: string): void;
    /**
     * Verify the hmac returned by Shopify.
     *
     * @param {Object} query The parsed query string
     * @return {Boolean} `true` if the hmac is valid, else `false`
     * @public
     */
    verifyHmac(query: any): boolean;
    /**
     * Request an access token.
     *
     * @param {String} shop The hostname of the shop, e.g. foo.myshopify.com
     * @param {String} code The authorization code
     * @return {Promise} Promise which is fulfilled with an access token and
     *     additional data
     * @public
     */
    getAccessToken(): void;
}
export default ShopifyUtil;
