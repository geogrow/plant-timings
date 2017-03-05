class Plant
  class Request
    def get
      connection.get
    end

    private

    def connection
      Faraday.new(url: url, headers: headers) do |faraday|
        faraday.request  :url_encoded             # form-encode POST params
        faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
      end
    end

    def url
      'http://api/plants.json'
    end

    def headers
      {
        'Content-Type' => 'application/json'
      }
    end
  end
end
