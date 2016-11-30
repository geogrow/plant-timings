class Plant < ActiveRecord::Base
  validates :latin_name, presence: true

  def get
    Plant.all
  end
end
