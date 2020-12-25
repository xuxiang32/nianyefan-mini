const BASE_URL = 'http://123.207.125.211:8002' 
const commonRequest = (options)=>{
	let header = {
		'content-type': 'application/json'
	}
	let token = ''
	if(options.url.indexOf('login') === -1){
		const $q = new Promise((resolve,reject) => {
			uni.getStorage({
				key:'TOKEN',
				success:(res) => {
					token = res.data
					header = {
						'content-type': 'application/json',
						'Authorization': token
					}
					console.info('header--api--', header)
					uni.request({
						url: BASE_URL + '/api' + options.url,
						method: options.method || 'GET',
						dataType: 'json',
						data: options.data || {},
						header: header,
						success: (res) => {
							console.info(' 返回结果-----', res)
							if(res.data.statusCode !== 200 ){
								return uni.showToast({
									title:'获取数据失败'
								})
							}
							resolve(res.data)
						},
						fail:(err)=>{
							uni.showToast({
								title:'请求失败'
							})
							reject(err)
						}
					})
				}
			})
		})
		return $q
		
	} else {
		return new Promise((resolve,reject)=>{
				uni.request({
					url: BASE_URL + options.url,
					method: options.method || 'GET',
					dataType: 'json',
					data: options.data || {},
					header: header,
					success: (res) => {
						// console.info(' 返回结果-----', res)
						if(res.data.code !== 200 ){
							return uni.showToast({
								title:'获取数据失败'
							})
						}
						resolve(res.data)
					},
					fail:(err)=>{
						uni.showToast({
							title:'请求失败'
						})
						reject(err)
					}
				})
		})
	}
	// console.info('请求header=====', header)
	
}


export default {
    baseUrl: BASE_URL,
    commonRequest               
}