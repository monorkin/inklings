class DocumentsController < ApplicationController
  before_action :set_document, only: %i[ show edit update destroy ]

  def index
    @documents = Document.search(params[:search]).preload(:children)
  end

  def show
  end

  def new
    @document = Document.new(parent_id: params[:parent_id])
  end

  def create
    @document = Document.new(permitted_params)

    if @document.save
      redirect_to @document, status: :see_other, notice: "Document was successfully created."
    else
      render :new, status: :unprocessable_entity, alert: "There were some problems with the document creation."
    end
  end

  def edit
  end

  def update
    if @document.update(permitted_params)
      redirect_to @document, status: :see_other, notice: "Document was successfully updated."
    else
      render :edit, status: :unprocessable_entity, alert: "There were some problems with the document update."
    end
  end

  def destroy
    @document.destroy
    redirect_to after_destroy_path, status: :see_other, notice: "Document was successfully destroyed."
  end

  private

    def set_document
      @document = Document.find(params[:id])
    end

    def permitted_params
      params.require(:document).permit(:title, :content, :parent_id)
    end

    def after_destroy_path
      @document.parent || documents_path
    end
end
