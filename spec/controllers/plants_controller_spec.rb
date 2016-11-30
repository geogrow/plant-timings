require 'spec_helper'

describe PlantsController, :type => :controller do
  let(:valid_attributes) { 
    { 
      'latin_name' => 'Alliaria petiolata',
      'common_name' => 'Garlic Mustard',
      'habitat' => 'Woodland edge'
      }
    }
  let(:valid_session) { {} }
end
