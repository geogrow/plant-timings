source "https://rubygems.org"

ruby "2.3.1"

gem "rails", "~> 5.0.0.1"
gem "react_on_rails", "~> 6"
gem "autoprefixer-rails"
gem "delayed_job_active_record"
gem "flutie"
gem "honeybadger"
gem "normalize-rails", "~> 3.0.0"
gem "pg"
gem "puma"
gem "rack-canonical-host"
gem "recipient_interceptor"
gem "sass-rails", "~> 5.0"
gem "simple_form"
gem "skylight"
gem "sprockets", ">= 3.0.0"
gem "sprockets-es6"
gem "suspenders"
gem "title"
gem "uglifier"
gem 'coffee-rails'

group :development do
  gem "listen"
  gem "spring"
  gem "spring-commands-rspec"
  gem "web-console"
end

group :development, :test do
  gem "awesome_print"
  gem "bullet"
  gem "bundler-audit", ">= 0.5.0", require: false
  gem "dotenv-rails"
  gem "factory_girl_rails"
  #gem "pry-byebug"
  gem "pry-rails"
  gem "rspec-rails", "~> 3.5.0.beta4"
end

group :development, :staging do
  gem "rack-mini-profiler", require: false
end

group :test do
  gem "capybara-webkit"
  gem "database_cleaner"
  gem "formulaic"
  gem "launchy"
  gem "shoulda-matchers"
  gem "simplecov", require: false
  gem "timecop"
  gem "webmock"
end

group :staging, :production do
  gem "rack-timeout"
  gem "rails_stdout_logging"
end

gem 'bootstrap-sass', '~> 3.3.6'
gem 'autoprefixer-rails'
gem 'refills', group: [:development, :test]
