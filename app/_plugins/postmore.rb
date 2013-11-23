module ReadMore
	def readmore(input, url, text)
		if input.include? '<!--readmore-->'
			input.split('<!--readmore-->').first + "<p class='read_more'><a href='#{url}'>#{text}</p>"
		else
			input
		end
	end
end

Liquid::Template.register_filter(ReadMore)