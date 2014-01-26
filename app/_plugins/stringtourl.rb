module StringToURL
	def stringtourl(string)
		result = string.split.join('+').insert(-1, '+~+')
	end
end

Liquid::Template.register_filter(StringToURL)