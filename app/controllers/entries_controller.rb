class EntriesController < ApplicationController
  respond_to :json

  def index
    respond_with Entry.all
  end

  def show
    respond_with Entry.find(entry_params[:id])
  end

  def create
    respond_with Entry.create(entry_params)
  end

  def update
    respond_with Entry.update(entry_params[:id], entry_params[:entry])
  end

  def destroy
    respond_with Entry.destroy(entry_params[:id])
  end

  private
  def entry_params
    params.permit(:name, :id, :entry)
  end
end
