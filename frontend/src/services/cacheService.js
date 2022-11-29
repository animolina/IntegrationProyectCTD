export class CacheService {
	static setItem(cacheItem, value) {
		window.sessionStorage.setItem(cacheItem, value);
	}

	static getItem(cacheItem) {
		return window.sessionStorage.getItem(cacheItem);
	}

	static setJwt(value) {
		window.sessionStorage.setItem(CacheItems.Jwt, value);
	}

	static getJwt(cacheItem) {
		return window.sessionStorage.getItem(CacheItems.Jwt);
	}
}

export const CacheItems = {
	Jwt: 'jwt',
};
