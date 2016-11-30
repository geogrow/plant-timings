class StandsController < ApplicationController
  before_action :set_stand, only: [:show, :edit, :update, :destroy]

  # GET /stands
  # GET /stands.json
  def index
    @stands = Stand.all
  end

  # GET /stands/1
  # GET /stands/1.json
  def show
    
  end

  # GET /stands/new
  def new
    @stand = Stand.new
    @common_names = common_names
  end

  def plant_response
    Plant.new().get
  end

  # GET /stands/1/edit
  def edit
  end

  # POST /stands
  # POST /stands.json
  def create
    @stand = Stand.new(stand_params)

    respond_to do |format|
      if @stand.save
        format.html { redirect_to @stand, notice: 'Stand was successfully created.' }
        format.json { render :show, status: :created, location: @stand }
      else
        format.html { render :new }
        format.json { render json: @stand.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stands/1
  # PATCH/PUT /stands/1.json
  def update
    respond_to do |format|
      if @stand.update(stand_params)
        format.html { redirect_to @stand, notice: 'Stand was successfully updated.' }
        format.json { render :show, status: :ok, location: @stand }
      else
        format.html { render :edit }
        format.json { render json: @stand.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stands/1
  # DELETE /stands/1.json
  def destroy
    @stand.destroy
    respond_to do |format|
      format.html { redirect_to stands_url, notice: 'Stand was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def common_names
      plants.map do |plant|
        plant.select { |key, value| key.match('common_name') }.map{ |k,v| v }
      end.flatten
    end

    def plants
      @plant ||= plant_response.as_json
    end
  
    # Use callbacks to share common setup or constraints between actions.
    def set_stand
      @stand = Stand.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stand_params
      params.require(:stand).permit(:max_lat, :min_lat, :max_long, :min_long)
    end
end
