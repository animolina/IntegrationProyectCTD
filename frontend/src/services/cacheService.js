export class CacheService {
	static setItem(cacheItem, value) {
		sessionStorage.setItem(cacheItem, value);
	}

	static getItem(cacheItem) {
		return sessionStorage.getItem(cacheItem);
	}

	static removeItem(cacheItem) {
		return sessionStorage.removeItem(cacheItem);
	}

	static clearCache() {
		sessionStorage.clear();
	}

	static setJwt(value) {
		const sessionObject = {
			jwt: value,
			expiresAt: new Date(new Date().getTime() + 10 * 60000),
		};
		sessionStorage.setItem(CacheItems.Jwt, JSON.stringify(sessionObject));
	}

	static getJwt() {
		const sessionObject = JSON.parse(sessionStorage.getItem(CacheItems.Jwt));
		if (!sessionObject) {
			return null;
		}
		const expirationDate = sessionObject.expiresAt;
		const currentDate = new Date();
		if (Date.parse(currentDate) < Date.parse(expirationDate)) {
			return sessionObject.jwt;
		} else {
			location.assign('/login');
			this.clearCache();
			console.info('Session expired');
		}
	}
}

export const CacheItems = {
	Jwt: 'jwt',
	UserName: 'user-name',
	UserLastName: 'user-last-name',
	UserEmail: 'user-email',
	UserRole: 'user-role',
};
