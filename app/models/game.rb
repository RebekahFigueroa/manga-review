class Game < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, presence: true, uniqueness: true
  validates :image_url, presence: true, uniqueness: true 
  validates :genre, presence: true
end
