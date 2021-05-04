"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_es_1 = __importDefault(require("crypto-es"));
/**
 * ShopifyUtil class.
 */
var ShopifyUtil = /** @class */ (function () {
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
    function ShopifyUtil(options) {
        if (!options || !options.sharedSecret || !options.redirectUri || !options.apiKey) {
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
    ShopifyUtil.prototype.generateNonce = function () {
        return crypto_es_1.default.lib.WordArray.random(128 / 8).toString(crypto_es_1.default.enc.Hex);
    };
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
    ShopifyUtil.prototype.generateAuthUrl = function (shop, scopes, nonce, accessMode) {
        //TODO
    };
    /**
     * Verify the hmac returned by Shopify.
     *
     * @param {Object} query The parsed query string
     * @return {Boolean} `true` if the hmac is valid, else `false`
     * @public
     */
    ShopifyUtil.prototype.verifyHmac = function (query) {
        // TODO Use Nounce
        var message = Object.keys(query)
            .filter(function (key) { return key !== 'hmac'; })
            .map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
        }).join('&');
        var hmac = query.hmac;
        var hash = crypto_es_1.default.HmacSHA256(message, this.sharedSecret);
        return hmac === hash.toString(crypto_es_1.default.enc.Hex);
    };
    /**
     * Request an access token.
     *
     * @param {String} shop The hostname of the shop, e.g. foo.myshopify.com
     * @param {String} code The authorization code
     * @return {Promise} Promise which is fulfilled with an access token and
     *     additional data
     * @public
     */
    ShopifyUtil.prototype.getAccessToken = function () {
        // TODO
    };
    return ShopifyUtil;
}());
exports.default = ShopifyUtil;
