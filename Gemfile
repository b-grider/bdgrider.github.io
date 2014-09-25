source 'https://rubygems.org'

require 'json'
require 'open-uri'
require 'rouge'
require 'rbconfig'

gem 'pygments.rb', '0.5.0'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', versions['github-pages']