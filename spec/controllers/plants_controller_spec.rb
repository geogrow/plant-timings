require 'rails_helper'

RSpec.describe PlantsController, :type => :controller do
  let(:valid_attributes) { 
    { 
      'latin_name' => 'Alliaria petiolata',
      'common_name' => 'Garlic Mustard',
      'habitat' => 'Woodland edge'
      }
    }

  let(:plants) { [] }

  let(:id) { "1" }
  let(:plant) { double('Plant') }
  let(:params) { {id: id} }

  describe 'GET #index' do
    it 'returns all the plants' do
      get :index, {}

      expect(response.body).to eql(plants.to_json)
    end
  end

  describe 'GET #show' do
    before do
      allow(Plant).to receive(:find).with(id).and_return plant
    end

    it 'returns one plant item' do
      get :show, params: params

      expect(response.body).to eql(plant.to_json)
    end
  end

  describe 'GET #new' do
    it 'renders a new template' do
      get :new, {}
      assert_response :success
    end
  end

  describe 'GET #edit' do
    it 'renders a new template' do
      get :edit, params: {id: "1"}
      assert_response :success
    end
  end
end
